"use client"

import { gsap } from "gsap"

export const messagesObserver = () => {
  if (typeof window !== "undefined") {
    return new IntersectionObserver((e) => {
      e.forEach((entry) => {
        if (entry.isIntersecting) {
          gsap.to(entry.target, {
            opacity: 1,
            scale: 1,
            ease: "expo.out(1.7)",
          })
          entry.target.childNodes.forEach((p) => {
            gsap.to(p, {
              opacity: 1,
              delay: 0.2,
            })
          })
        } else {
          gsap.to(entry.target, {
            opacity: 0,
            scale: 0.5,
            ease: "expo.out(1.7)",
          })
          entry.target.childNodes.forEach((p) => {
            gsap.to(p, {
              opacity: 0,
              delay: 0.1,
            })
          })
        }
      })
    })
  }
}
