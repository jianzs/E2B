// Beware of our conventions:
// - use `js` for "JavaScript & TypeScript" - the code is actually JavaScript, but we want to communicate that we are TypeScript friendly
// @see https://e2b-team.slack.com/archives/C05AGT4UFMJ/p1694097476092009?thread_ts=1694072588.364759&cid=C05AGT4UFMJ
// - use `javascript` for explicitly JavaScript
// - use `typescript` for explicitly TypeScript

export enum LangShort {
  js = 'js',
  py = 'py',
  jsx = 'jsx',
}

export const docsSandboxName = 'docs'

export const languageToLangShort: Record<string, LangShort> = {
  // TODO: Nicer
  'JavaScript & TypeScript': LangShort.js,
  JavaScript: LangShort.js,
  TypeScript: LangShort.js,

  JSX: LangShort.jsx,
  Python: LangShort.py,
}

export const mdLangToLangShort: Record<string, LangShort> = {
  js: LangShort.js,
  javascript: LangShort.js,
  ts: LangShort.js,
  jsx: LangShort.jsx,

  typescript: LangShort.js,
  python: LangShort.py,
}

export const languageNames: Record<string, string> = {
  js: 'JavaScript & TypeScript',
  ts: '⚠️ FIXME See note in apps/docs/src/utils/consts.ts', // Please avoid using `ts`, see note above
  javascript: 'JavaScript',
  typescript: 'TypeScript',
  jsx: 'JSX',

  php: 'PHP',
  python: 'Python',
  ruby: 'Ruby',
  go: 'Go',
}
