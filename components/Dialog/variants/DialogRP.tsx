// 'use client'

// // core
// import React, { useCallback, useState } from 'react'
// // components
// import { DialogDefault, IDialogDefaultProps } from './DialogDefault'
// // libraries
// import cx from 'classnames'

// interface IDialogRPProps extends Omit<IDialogDefaultProps, 'children'> {
//   /**
//    * Method rendering Dalog content from which props and state can be extracted
//    * @param renderProps Dialog props and state that's forwarded
//    */
//   children(renderProps: IRenderProps): React.ReactNode
//   /**
//    * Custom classname for the `div` wrapping the `trigger`
//    */
//   classNameTrigger?: string
//   /**
//    * Whether the trigger element is disabled - prevents opening of the Dialog (used in `<Translation />` for unauthenticated users)
//    */
//   isTriggerDisabled?: boolean
//   /**
//    * Trigger element that when clicked, presents the `<Dialog />`
//    */
//   trigger: React.ReactNode
// }

// interface IRenderProps {
//   /**
//    * Whether the Dialog is currently shown or not
//    */
//   isShown: boolean
//   /**
//    * Event that toggles the visibility of the `Dialog`
//    * @param overrideVal if specifies, forcefully overrides whatever value `isShown` state has, oherwise just toggles the previous value
//    */
//   onToggle: (overrideVal?: boolean) => () => void
// }

// /**
//  * Dialog variant utilizing React's Render Props feature
//  *
//  * It has inner state handling the visibility of the `Dialog`
//  */
// export const DialogRP = ({
//   children,
//   classNameTrigger,
//   isShown,
//   isTriggerDisabled,
//   trigger,
//   onToggle,
//   ...modalProps
// }: IDialogRPProps) => {
//   const [_isShown, _setIsShown] = useState<boolean>(!!isShown)

//   const _onToggle = useCallback(
//     (val?: boolean) => () => {
//       if (isTriggerDisabled) return

//       const isShown = val ?? !_isShown

//       _setIsShown(isShown)
//       onToggle?.(isShown)
//     },
//     [isTriggerDisabled, _isShown, Boolean(onToggle)]
//   )

//   return (
//     <>
//       {/* TRIGGER */}
//       <div className={cx('cursor-pointer', classNameTrigger)} onClick={_onToggle(true)}>
//         {trigger}
//       </div>

//       {/* DIALOG */}
//       <DialogDefault {...modalProps} isShown={_isShown} onToggle={_onToggle()}>
//         {children({
//           isShown: _isShown,
//           onToggle: (val) => _onToggle(val),
//         })}
//       </DialogDefault>
//     </>
//   )
// }
