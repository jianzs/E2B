import pytest

from asyncio import Event

from e2b import NotFoundException, AsyncSandbox, FilesystemEvent, FilesystemEventType


@pytest.mark.asyncio
async def test_watch_directory_changes(async_sandbox: AsyncSandbox):
    dirname = "test_watch_dir"
    filename = "test_watch.txt"
    content = "This file will be watched."
    new_content = "This file has been modified."

    await async_sandbox.files.make_dir(dirname)
    await async_sandbox.files.write(f"{dirname}/{filename}", content)

    event_triggered = Event()

    def handle_event(e: FilesystemEvent):
        if e.type == FilesystemEventType.WRITE and e.name == filename:
            event_triggered.set()

    handle = await async_sandbox.files.watch(dirname, on_event=handle_event)

    await async_sandbox.files.write(f"{dirname}/{filename}", new_content)

    await event_triggered.wait()

    await handle.close()


@pytest.mark.asyncio
async def test_watch_non_existing_directory(async_sandbox: AsyncSandbox):
    dirname = "non_existing_watch_dir"

    with pytest.raises(NotFoundException):
        await async_sandbox.files.watch(dirname, on_event=lambda e: None)


# TODO: Add test for nonexistent file