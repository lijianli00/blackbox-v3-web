import { useLoadingBar, useDialog, useMessage, useNotification, NButton, NSwitch } from 'naive-ui'
import dayjs from 'dayjs'
import { h } from 'vue'
import { decrypto } from '../crypto'

// 挂载naive组件的方法至window, 以便在全局使用
export function setupNaiveTools() {
  window.$loadingBar = useLoadingBar()
  window.$dialog = useDialog()
  window.$message = useMessage()
  window.$notification = useNotification()
}

export function setupGlobalTools() {
  // 日期格式化插件
  window.$dayjs = dayjs
  window.$decrypto = decrypto

  const textBtnClass = {}
  // table 按钮
  window.$textBtn = ({
    text,
    onClick,
    code,
    show = true,
    type = 'primary',
    style = {},
    btnClass = {}, // class
    divider = false,
  }) => {
    return show && (!code || $isCode(code))
      ? h(
          NButton,
          {
            text: true,
            type,
            onClick: onClick,
            style,
            class: {
              'sh-table-operation-btn': divider,
              ...btnClass,
            },
          },
          { default: () => text }
        )
      : ''
  }
  // 删除方法
  window.$delete = (fun, params, callback = () => {}, title = '确认删除，删除后不可恢复?') => {
    $dialog.warning({
      title: '警告',
      content: title,
      positiveText: '确定',
      negativeText: '不确定',
      onPositiveClick: async () => {
        const { code, data, msg } = await fun(params)
        if (code === 0) {
          callback({ code, data, msg })
          $message.success(msg)
        } else {
          $message.error(msg)
        }
      },
    })
  }

  // table 开关
  window.$nSwitch = ({ status = false, onClick, code, checkedValue = 1, uncheckedValue = 0 }) => {
    return h(
      NSwitch,
      {
        checkedValue,
        uncheckedValue,
        disabled: code && !$isCode(code),
        value: status,
        onClick: code && !$isCode(code) ? '' : onClick,
      },
      { default: () => text }
    )
  }
}
