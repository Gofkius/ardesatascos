import { memo } from "react"
import {
  AnimatePresence,
  motion,
  type DOMMotionComponents,
  type MotionProps,
  type Variants,
} from "motion/react"

import { cn } from "@/lib/utils"

type AnimationType = "text" | "word" | "character" | "line"
type AnimationVariant =
  | "fadeIn"
  | "blurIn"
  | "blurInUp"
  | "blurInDown"
  | "slideUp"
  | "slideDown"
  | "slideLeft"
  | "slideRight"
  | "scaleUp"
  | "scaleDown"

const motionElements = {
  article: motion.article,
  div: motion.div,
  h1: motion.h1,
  h2: motion.h2,
  h3: motion.h3,
  h4: motion.h4,
  h5: motion.h5,
  h6: motion.h6,
  li: motion.li,
  p: motion.p,
  section: motion.section,
  span: motion.span,
} as const

type MotionElementType = Extract<
  keyof DOMMotionComponents,
  keyof typeof motionElements
>

interface TextAnimateProps extends Omit<MotionProps, "children"> {
  children: string
  className?: string
  segmentClassName?: string
  delay?: number
  duration?: number
  variants?: Variants
  as?: MotionElementType
  by?: AnimationType
  startOnView?: boolean
  once?: boolean
  animation?: AnimationVariant
  accessible?: boolean
}

const TextAnimateBase = ({
  children,
  delay = 0,
  duration = 0.3,
  className,
  as: Component = "p",
  startOnView = true,
  once = false,
  variants: _variants,
  segmentClassName: _segmentClassName,
  by: _by,
  animation: _animation,
  accessible: _accessible,
  ...props
}: TextAnimateProps) => {
  void _variants
  void _segmentClassName
  void _by
  void _animation
  void _accessible
  const MotionComponent = motionElements[Component]

  return (
    <AnimatePresence mode="popLayout">
      <MotionComponent
        initial={{ opacity: 1, y: 0 }}
        whileInView={startOnView ? { opacity: 1, y: 0 } : undefined}
        animate={startOnView ? undefined : { opacity: 1, y: 0 }}
        transition={{ duration, delay }}
        className={cn("whitespace-pre-wrap", className)}
        viewport={{ once }}
        {...props}
      >
        {children}
      </MotionComponent>
    </AnimatePresence>
  )
}

export const TextAnimate = memo(TextAnimateBase)
