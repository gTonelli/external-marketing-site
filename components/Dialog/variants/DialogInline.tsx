// 'use client'

// // core
// import React, { useCallback, useContext, useEffect, useRef } from 'react'
// // components
// import { Backdrop, Card, IDefaultWrapperProps } from '@/components'
// import { ViewportContext } from 'App'
// // libraries
// import cx from 'classnames'
// import ReactDOM from 'react-dom'
// // utils
// import { TZIndexValues } from '@/utils/types'

// export interface IDialogInlineProps
//   extends IDefaultWrapperProps,
//     Omit<IModalProps, 'height' | 'x' | 'y'> {
//   /* Class names for the <Modal /> */
//   classNameModal?: string
//   /**
//    * side on axis x to which will be component shown
//    *
//    * @default 'left'
//    */
//   side?: 'left' | 'right'
//   /**
//    * Whether the Dialog should have width transition on open
//    *
//    * @default 'true'
//    */
//   transformWidth?: boolean
//   /**
//    * Whether the Dialog contents should be wrapped in `<Card>`
//    *
//    * @default 'true'
//    */
//   useCard?: boolean
//   /**
//    * requested x position of Dialog
//    */
//   requestedX?: number
//   /**
//    * requested y position of Dialog
//    */
//   requestedY?: number
// }

// /**
//  * Component to display some content in dialog container.
//  * Modal will be placed relatively to parent container.
//  * There is expand animation for both width and height.
//  * Component will change expand direction when it is near the screen edge.
//  */
// export function DialogInline({
//   children,
//   className,
//   classNameModal,
//   direction = 'top',
//   isOpen,
//   requestedX,
//   requestedY,
//   side = 'right',
//   transformWidth = true,
//   useBackdrop = true,
//   useCard = true,
//   width = 400,
//   zIndex = 'z-50',
//   onBlur,
// }: IDialogInlineProps) {
//   const popoverPositionRef = useRef<HTMLDivElement>(null)
//   const contentRef = useRef<HTMLDivElement>(null)

//   const spaceNearEdge = 5

//   const {
//     x,
//     y,
//     width: refWidth,
//   } = popoverPositionRef.current
//     ? popoverPositionRef.current.getBoundingClientRect()
//     : { width, x: undefined, y: undefined }

//   // get height of content
//   const parent = contentRef.current?.parentNode as HTMLElement | undefined
//   const height = parent?.scrollHeight || 0

//   // change direction if necessary
//   const horizontalDirection = x
//     ? side === 'right'
//       ? // if we exceeding screen limits from right
//         x + width + spaceNearEdge > innerWidth
//         ? 'left'
//         : 'right'
//       : // if we exceeding screen limits from top
//       x - width - spaceNearEdge < 0
//       ? 'right'
//       : 'left'
//     : side

//   const verticalDirection = y
//     ? direction === 'bottom'
//       ? // if we exceeding screen limits from bottom
//         y + height + spaceNearEdge > innerHeight
//         ? 'top'
//         : 'bottom'
//       : // if we exceeding screen limits from top
//       y - height - spaceNearEdge < 0
//       ? 'bottom'
//       : 'top'
//     : direction

//   // we have to use Ref to run initial css animation on width
//   useEffect(() => {
//     if (contentRef.current) {
//       contentRef.current.style.transform = `scale${verticalDirection === 'top' ? 'X' : ''}(${
//         transformWidth && !isOpen ? 0 : 1
//       })`
//     }
//   }, [isOpen, children])

//   // place origin relative to reference element
//   const finalXCoord = horizontalDirection === 'right' ? x : x && x + refWidth - width

//   const _onBlur = useCallback(() => {
//     onBlur?.()
//   }, [!!onBlur])

//   const cardClassesMap = {
//     right: {
//       top: 'rounded-bl-none',
//       bottom: 'rounded-tl-none',
//     },
//     left: {
//       top: 'rounded-br-none',
//       bottom: 'rounded-tr-none',
//     },
//   }

//   const wrapperDivClassesMap = {
//     right: {
//       top: 'origin-left',
//       bottom: 'origin-top-left',
//     },
//     left: {
//       top: 'origin-right',
//       bottom: 'origin-top-right',
//     },
//   }

//   return (
//     <div ref={popoverPositionRef} className={className}>
//       <Modal
//         className={classNameModal}
//         direction={verticalDirection}
//         height={height}
//         isOpen={isOpen}
//         useBackdrop={useBackdrop}
//         width={width}
//         x={requestedX || finalXCoord}
//         y={requestedY || y}
//         zIndex={zIndex}
//         onBlur={_onBlur}>
//         <div
//           ref={contentRef}
//           className={cx(
//             'relative transition-transform',
//             wrapperDivClassesMap[horizontalDirection][verticalDirection]
//           )}>
//           {useCard ? (
//             <Card
//               className={cx(
//                 'w-full rounded-20',
//                 cardClassesMap[horizontalDirection][verticalDirection],
//                 horizontalDirection === 'right' ? 'float-left' : 'float-right'
//               )}>
//               {children}
//             </Card>
//           ) : (
//             children
//           )}
//         </div>
//       </Modal>
//     </div>
//   )
// }

// export interface IModalProps extends IDefaultWrapperProps {
//   /**
//    * direction on axis y to which will be component shown
//    * @default 'top'
//    */
//   direction?: 'top' | 'bottom'
//   /**
//    * Height of element
//    */
//   height: number
//   /**
//    * Whether to show content or not
//    */
//   isOpen?: boolean
//   /**
//    * Whether to use backdrop
//    * @default true
//    */
//   useBackdrop?: boolean
//   /**
//    * Width of element
//    * @default 400
//    */
//   width?: number
//   /**
//    * X coordinate on page. Modal will be placed on the center of the screen if ommited.
//    */
//   x?: number
//   /**
//    * Y coordinate on page. Modal will be placed 100px from the top of the screen if ommited.
//    */
//   y?: number
//   /**
//    * tailwind whole z-index class
//    * @default 'z-50'
//    */
//   zIndex?: TZIndexValues
//   /**
//    * Callback to run on backdrop click
//    */
//   onBlur?: () => void
// }

// /**
//  * Simple component to place anything absolutely on the screen above anything else.
//  * Renders only simple rectangle on fixed position with fixed width.
//  * Height is variable but there is max-height set to prevent screen overlap
//  * X-coord can be modified to prevent horizontal screen overlap (width stays unchanged)
//  */
// export const Modal = ({
//   children,
//   className,
//   direction,
//   height,
//   isOpen,
//   useBackdrop = true,
//   width: requestedWidth = 400,
//   x: requestedX,
//   y: requestedY,
//   zIndex = 'z-50',
//   onBlur,
// }: IModalProps) => {
//   const { windowWidth } = useContext(ViewportContext)

//   const width = Math.min(requestedWidth, windowWidth)
//   let x = typeof requestedX === 'number' ? requestedX : (windowWidth - width) / 2
//   let y = typeof requestedY === 'number' ? requestedY : 100

//   // check boundaries
//   x = Math.min(Math.max(0, x), windowWidth - width)
//   y = Math.min(
//     Math.max(0, y),
//     direction === 'bottom' ? window.innerHeight - height : window.innerHeight
//   )

//   return ReactDOM.createPortal(
//     <>
//       {useBackdrop && <Backdrop visible={!!isOpen} zIndex={zIndex} onClick={onBlur} />}

//       <div
//         className={cx(
//           'transition-all',
//           className?.includes('fixed') ? '' : 'absolute',
//           zIndex,
//           isOpen ? 'opacity-100 visible' : 'opacity-0 invisible',
//           className
//         )}
//         style={{
//           left: x,
//           // do not overlap screen if direction is bottom
//           maxHeight: direction === 'bottom' ? window.innerHeight - y : height,
//           top: direction === 'top' ? Math.max(y - height, 0) : y,
//           width,
//         }}>
//         {children}
//       </div>
//     </>,
//     document.body
//   )
// }
