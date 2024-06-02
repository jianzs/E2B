# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: envd/filesystem/v1/filesystem.proto
# Protobuf Python Version: 5.26.1
"""Generated protocol buffer code."""
from google.protobuf import descriptor as _descriptor
from google.protobuf import descriptor_pool as _descriptor_pool
from google.protobuf import symbol_database as _symbol_database
from google.protobuf.internal import builder as _builder
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()




DESCRIPTOR = _descriptor_pool.Default().AddSerializedFile(b'\n#envd/filesystem/v1/filesystem.proto\x12\x12\x65nvd.filesystem.v1\"#\n\rRemoveRequest\x12\x12\n\x04path\x18\x01 \x01(\tR\x04path\"\x10\n\x0eRemoveResponse\"!\n\x0bStatRequest\x12\x12\n\x04path\x18\x01 \x01(\tR\x04path\"C\n\x0cStatResponse\x12\x33\n\x05\x65ntry\x18\x01 \x01(\x0b\x32\x1d.envd.filesystem.v1.EntryInfoR\x05\x65ntry\"Q\n\tEntryInfo\x12\x12\n\x04name\x18\x01 \x01(\tR\x04name\x12\x30\n\x04type\x18\x02 \x01(\x0e\x32\x1c.envd.filesystem.v1.FileTypeR\x04type\"!\n\x0bListRequest\x12\x12\n\x04path\x18\x01 \x01(\tR\x04path\"G\n\x0cListResponse\x12\x37\n\x07\x65ntries\x18\x01 \x03(\x0b\x32\x1d.envd.filesystem.v1.EntryInfoR\x07\x65ntries\"\"\n\x0cWatchRequest\x12\x12\n\x04path\x18\x01 \x01(\tR\x04path\"J\n\rWatchResponse\x12\x39\n\x05\x65vent\x18\x01 \x01(\x0b\x32#.envd.filesystem.v1.FilesystemEventR\x05\x65vent\"X\n\x0f\x46ilesystemEvent\x12\x12\n\x04path\x18\x01 \x01(\tR\x04path\x12\x31\n\x04type\x18\x02 \x01(\x0e\x32\x1d.envd.filesystem.v1.EventTypeR\x04type*R\n\x08\x46ileType\x12\x19\n\x15\x46ILE_TYPE_UNSPECIFIED\x10\x00\x12\x12\n\x0e\x46ILE_TYPE_FILE\x10\x01\x12\x17\n\x13\x46ILE_TYPE_DIRECTORY\x10\x02*\x98\x01\n\tEventType\x12\x1a\n\x16\x45VENT_TYPE_UNSPECIFIED\x10\x00\x12\x15\n\x11\x45VENT_TYPE_CREATE\x10\x01\x12\x14\n\x10\x45VENT_TYPE_WRITE\x10\x02\x12\x15\n\x11\x45VENT_TYPE_REMOVE\x10\x03\x12\x15\n\x11\x45VENT_TYPE_RENAME\x10\x04\x12\x14\n\x10\x45VENT_TYPE_CHMOD\x10\x05\x32\xca\x02\n\x11\x46ilesystemService\x12I\n\x04Stat\x12\x1f.envd.filesystem.v1.StatRequest\x1a .envd.filesystem.v1.StatResponse\x12I\n\x04List\x12\x1f.envd.filesystem.v1.ListRequest\x1a .envd.filesystem.v1.ListResponse\x12N\n\x05Watch\x12 .envd.filesystem.v1.WatchRequest\x1a!.envd.filesystem.v1.WatchResponse0\x01\x12O\n\x06Remove\x12!.envd.filesystem.v1.RemoveRequest\x1a\".envd.filesystem.v1.RemoveResponseB\x93\x01\n\x16\x63om.envd.filesystem.v1B\x0f\x46ilesystemProtoP\x01\xa2\x02\x03\x45\x46X\xaa\x02\x12\x45nvd.Filesystem.V1\xca\x02\x12\x45nvd\\Filesystem\\V1\xe2\x02\x1e\x45nvd\\Filesystem\\V1\\GPBMetadata\xea\x02\x14\x45nvd::Filesystem::V1b\x06proto3')

_globals = globals()
_builder.BuildMessageAndEnumDescriptors(DESCRIPTOR, _globals)
_builder.BuildTopDescriptorsAndMessages(DESCRIPTOR, 'envd.filesystem.v1.filesystem_pb2', _globals)
if not _descriptor._USE_C_DESCRIPTORS:
  _globals['DESCRIPTOR']._loaded_options = None
  _globals['DESCRIPTOR']._serialized_options = b'\n\026com.envd.filesystem.v1B\017FilesystemProtoP\001\242\002\003EFX\252\002\022Envd.Filesystem.V1\312\002\022Envd\\Filesystem\\V1\342\002\036Envd\\Filesystem\\V1\\GPBMetadata\352\002\024Envd::Filesystem::V1'
  _globals['_FILETYPE']._serialized_start=611
  _globals['_FILETYPE']._serialized_end=693
  _globals['_EVENTTYPE']._serialized_start=696
  _globals['_EVENTTYPE']._serialized_end=848
  _globals['_REMOVEREQUEST']._serialized_start=59
  _globals['_REMOVEREQUEST']._serialized_end=94
  _globals['_REMOVERESPONSE']._serialized_start=96
  _globals['_REMOVERESPONSE']._serialized_end=112
  _globals['_STATREQUEST']._serialized_start=114
  _globals['_STATREQUEST']._serialized_end=147
  _globals['_STATRESPONSE']._serialized_start=149
  _globals['_STATRESPONSE']._serialized_end=216
  _globals['_ENTRYINFO']._serialized_start=218
  _globals['_ENTRYINFO']._serialized_end=299
  _globals['_LISTREQUEST']._serialized_start=301
  _globals['_LISTREQUEST']._serialized_end=334
  _globals['_LISTRESPONSE']._serialized_start=336
  _globals['_LISTRESPONSE']._serialized_end=407
  _globals['_WATCHREQUEST']._serialized_start=409
  _globals['_WATCHREQUEST']._serialized_end=443
  _globals['_WATCHRESPONSE']._serialized_start=445
  _globals['_WATCHRESPONSE']._serialized_end=519
  _globals['_FILESYSTEMEVENT']._serialized_start=521
  _globals['_FILESYSTEMEVENT']._serialized_end=609
  _globals['_FILESYSTEMSERVICE']._serialized_start=851
  _globals['_FILESYSTEMSERVICE']._serialized_end=1181
# @@protoc_insertion_point(module_scope)