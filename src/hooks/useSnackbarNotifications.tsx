import React, { useCallback } from 'react'
import { useSnackbar } from 'notistack'
import { Button } from '@mui/material'
import BackspaceIcon from '@mui/icons-material/Backspace'
import styled from '@emotion/styled'

import { secondaryColor } from '../constants/stylesConstants'

enum VariantType {
  default = 'default',
  error = 'error',
  success = 'success',
  warning = 'warning',
  info = 'info',
}

enum VerticalPositionType {
  top = 'top',
  bottom = 'bottom',
}

enum HorizontalPositionType {
  left = 'left',
  center = 'center',
  right = 'right',
}

type AnchorPosition = {
  vertical: VerticalPositionType
  horizontal: HorizontalPositionType
}

type NotificationParams = {
  variant?: VariantType
  autoHideDuration?: number
  anchorOrigin?: AnchorPosition
}

type NotificationOptions = {
  variant: VariantType
  autoHideDuration?: number
  anchorOrigin?: AnchorPosition
}

type UseSnackbarNotifications = {
  onDisplayDefaultNotification: (message: string, params?: NotificationOptions) => void
  onDisplayInfoNotification: (message: string, params?: NotificationOptions) => void
  onDisplaySuccessNotification: (message: string, params?: NotificationOptions) => void
  onDisplayWarningNotification: (message: string, params?: NotificationOptions) => void
  onDisplayErrorNotification: (message: string, params?: NotificationOptions) => void
}

const defaultHideDuration = 10000

const defaultAnchorPosition = {
  vertical: VerticalPositionType.bottom,
  horizontal: HorizontalPositionType.right,
}

const defaultNotificationConfig = {
  autoHideDuration: defaultHideDuration,
  anchorOrigin: defaultAnchorPosition,
}

const Icon = styled(BackspaceIcon)`
  color: ${secondaryColor};
`

const useSnackbarNotifications = (): UseSnackbarNotifications => {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar()

  const notificationActions = useCallback(
    (key: string) => (
      <Button onClick={() => closeSnackbar(key)}>
        <Icon />
      </Button>
    ),
    [closeSnackbar],
  )

  const getNotificationOptions = useCallback(
    (params: NotificationParams = defaultNotificationConfig) => {
      const { autoHideDuration = defaultHideDuration, anchorOrigin = defaultAnchorPosition } = params
      return { ...params, autoHideDuration, anchorOrigin, action: notificationActions }
    },
    [notificationActions],
  )

  const onDisplayNotification = useCallback(
    (message: string, params: NotificationOptions) => enqueueSnackbar(message, getNotificationOptions(params)),
    [enqueueSnackbar, getNotificationOptions],
  )

  const onDisplayDefaultNotification = useCallback(
    (message: string, params?: NotificationParams) =>
      onDisplayNotification(message, { ...params, variant: VariantType.default }),
    [onDisplayNotification],
  )

  const onDisplayInfoNotification = useCallback(
    (message: string, params?: NotificationParams) =>
      onDisplayNotification(message, { ...params, variant: VariantType.info }),
    [onDisplayNotification],
  )

  const onDisplaySuccessNotification = useCallback(
    (message: string, params?: NotificationParams) =>
      onDisplayNotification(message, { ...params, variant: VariantType.success }),
    [onDisplayNotification],
  )

  const onDisplayWarningNotification = useCallback(
    (message: string, params?: NotificationParams) =>
      onDisplayNotification(message, { ...params, variant: VariantType.warning }),
    [onDisplayNotification],
  )

  const onDisplayErrorNotification = useCallback(
    (message: string, params?: NotificationParams) =>
      onDisplayNotification(message, { ...params, variant: VariantType.error }),
    [onDisplayNotification],
  )

  return {
    onDisplayDefaultNotification,
    onDisplayInfoNotification,
    onDisplaySuccessNotification,
    onDisplayWarningNotification,
    onDisplayErrorNotification,
  }
}

export default useSnackbarNotifications
