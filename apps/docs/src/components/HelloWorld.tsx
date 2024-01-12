'use client'
import {
  useState,
} from 'react'
import clsx from 'clsx'
import Image from 'next/image'
import logoPython from '@/images/logos/python.svg'
import logoTS from '@/images/logos/ts.svg'
import logoJS from '@/images/logos/js.svg'
import logoNode from '@/images/logos/node.svg'
import logoVercel from '@/images/logos/vercel.svg'
import logoCFWorkers from '@/images/logos/cf-workers.svg'
import logoAWSLambdas from '@/images/logos/aws-lambdas.svg'
import logoGCPCF from '@/images/logos/gcp-cf.svg'
import logoSupabase from '@/images/logos/supabase.svg'
import logoOpenAI from '@/images/logos/openai.svg'
import logoMistral from '@/images/logos/mistral.png'
import logoAnyscale from '@/images/logos/anyscale.svg'
import logoReact from '@/images/logos/react.svg'
import logoNextjs from '@/images/logos/nextjs.svg'
import logoSvelte from '@/images/logos/svelte.svg'
import logoAstro from '@/images/logos/astro.svg'

export interface Props2 {
  onClick?: (e: any) => void
  icon?: any
  label: string
  state?: 'default' | 'selected' | 'disabled'
}
export function StackButton({
  onClick,
  icon,
  label,
  state = 'default',
}: Props2) {
  const [s, setS] = useState(state)
  function handleOnClick(e: any) {
    if (s !== 'selected') {
      setS('selected')
    } else if (s == 'selected') {
      setS('default')
    }
    onClick?.(e)
  }

  return (
    <button
      onClick={handleOnClick}
      className={clsx(
        "py-0.5 px-2 rounded-md hover:bg-brand-700 hover:text-gray-25 transition-all border hover:border-brand-400 hover:shadow-brand-800 shadow-md",
        s === 'selected' ? "bg-brand-700 text-gray-25 border-brand-400 shadow-brand-800" : "bg-zinc-800 text-zinc-400 border-zinc-600"
      )}
    >
      <div className="flex items-center justify-between gap-2">
        {icon && <Image src={icon} alt="logo" className="h-4 w-auto m-0" />}
        <span className="text-xs font-semibold whitespace-pre">
          {label}
        </span>
      </div>
    </button>
  )
}


export interface Props1 {
  onClick?: (e: any) => void
  lang: 'JavaScript' | 'TypeScript' | 'Python'
  state?: 'default' | 'selected' | 'disabled'
}
export function LanguageButton({
  onClick,
  lang,
  state,
}: Props1) {
  const langIcon = lang === 'JavaScript' ? logoJS : lang === 'TypeScript' ? logoTS : logoPython
  return (
    <StackButton
      onClick={onClick}
      icon={langIcon}
      label={lang}
      state={state}
    />
  )
}


export function HelloWorld() {
  return (
    <div className="flex flex-col items-start justify-start gap-4">
      {/* <div className="flex flex-col items-start justify-start gap-1">
        <span className="text-sm font-mono text-zinc-500">
          1. Language
        </span>
        <div className="flex gap-2">
          <LanguageButton lang="Python" />
          <LanguageButton // state="selected" lang="TypeScript" />
          <LanguageButton lang="JavaScript" />
        </div>
      </div> */}

      <div className="flex flex-col items-start justify-start gap-1">
        <span className="text-sm font-mono text-zinc-500">
          1. Runtime
        </span>
        <div className="flex flex-wrap gap-2">
          <StackButton
            label="Python"
            icon={logoPython}
          />
          <StackButton
            label="Node.js"
            icon={logoNode}
          />
          <StackButton
            label="Vercel Edge Functions"
            icon={logoVercel}
          />
          <StackButton
            label="Vercel Serverless Functions"
            icon={logoVercel}
          // state="selected"
          />
          <StackButton
            label="Supabase Edge Functions"
            icon={logoSupabase}
          />
          <StackButton
            label="Cloudflare Workers"
            icon={logoCFWorkers}
          />
          <StackButton
            label="AWS Lambda Functions"
            icon={logoAWSLambdas}
          />
          <StackButton
            label="Google Cloud Functions"
            icon={logoGCPCF}
          />
        </div>
      </div>


      <div className="flex flex-col items-start justify-start gap-1">
        <span className="text-sm font-mono text-zinc-500">
          2. LLM Provider
        </span>
        <div className="flex flex-wrap gap-2">
          <StackButton
            label="OpenAI"
            icon={logoOpenAI}
          />
          <StackButton
            label="Mistral"
            icon={logoMistral}
          // state="selected"
          />
          <StackButton
            label="🦜🔗  LangChain"
          />
          <StackButton
            label="Vercel AI SDK"
            icon={logoVercel}
          />
          <StackButton
            label="Anyscale"
            icon={logoAnyscale}
          />
        </div>
      </div>

      <div className="flex flex-col items-start justify-start gap-1">
        <span className="text-sm font-mono text-zinc-500">
          3. Frontend Framework
        </span>
        <div className="flex flex-wrap gap-2">
          <StackButton
            label="React"
            icon={logoReact}
          />
          <StackButton
            label="Next.js"
            icon={logoNextjs}
          // state="selected"
          />
          <StackButton
            label="Svelte"
            icon={logoSvelte}
          />
          <StackButton
            label="Astro"
            icon={logoAstro}
          />
        </div>
      </div>
    </div>
  )
}