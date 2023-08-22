"use client";
import React from "react";
import {SessionProvider} from "next-auth/react"
export default function Authprovider({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="en">
        <body><SessionProvider>{children}</SessionProvider></body>
      </html>
    )
  }
  