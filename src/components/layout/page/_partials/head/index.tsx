import React from 'react';
import NextHead from 'next/head'
import GoogleFonts from 'next-google-fonts'

interface MetaProps {
  date?: string;
  description?: string;
  image?: string;
  slug?: string;
}

interface HeadProps {
  title?: string;
  meta?: MetaProps;
}

const defaultValues = {
  description: 'Especializada em manutenção e restauração de áudio valvulado',
  date: '2021-02-20',
  image: '/images/BA.png',
  slug: 'audio-amplificador-valvulado',
  title: 'Bortolotti Audio, Audio Valvulado',
  keywords: 'Bortolotti Audio, Bortolotti, audio, amplificadores, amplificadores valvulados, manutenção, restauração, toca disco, tape deck, radio antigo'
}

export const Head: React.FC<HeadProps> = ({title, meta}) => {
  return(
    <>
    <GoogleFonts href="https://fonts.googleapis.com/css?family=OpenSans:200,400,500,700|Roboto:200,400,500,700|Ubuntu:200,400,500,700"/>
    <NextHead>
      <meta charSet="utf-8"/>
      <link rel="icon" type="image/svg+xml" href="/favicon.svg"></link>
      <title>{title && `${title} - ` } BortolottiAudio</title>

      <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" /> 
      <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
      <link rel="manifest" href="/favicons/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
      <meta name="msapplication-TileColor" content="#2d89ef" />
      <meta name="theme-color" content="#279AF1" />
      <meta name="description" content={meta?.description ? meta?.description : defaultValues.description} />
      <meta name="keywords" content={defaultValues.keywords} />

      <meta property="og:url" content="www.bortolotti.com.br" />
      <meta property="og:site_name" content="Bortolotti Audio" />
      <meta property="og:type" content="business.business" />
      <meta property="og:title" content={title ? title : defaultValues.title} />
      <meta property="og:description" content={meta?.description ? meta?.description : defaultValues.description} />
      <meta property="og:image" content={meta?.image ? meta?.image : defaultValues.image} />
    </NextHead>
    </>
  );
}