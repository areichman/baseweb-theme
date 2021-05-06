import { Button as DefaultButton } from 'baseui/button'
import { colors } from '../../themes/ncmec-light'

function Button({children, kind, ...props}) {
  const overrides = {
    primary: {
      backgroundColor: colors.sun,
      borderWidth: '2px',
      borderStyle: 'solid',
      borderColor: colors.sun,
      color: colors.shipGray,
      ':hover': {
        backgroundColor: colors.saffron,
        borderColor: colors.shipGray,
      },
      ':disabled': {
        borderColor: 'red',
      }
    },
    secondary: {
      backgroundColor: 'white',
      borderWidth: '2px',
      borderStyle: 'solid',
      borderColor: colors.blueLagoon,
      color: colors.blueLagoon,
      ':hover': {
        color: 'white',
        backgroundColor: colors.blueLagoon,
      },
    },
  }

  return (
    <DefaultButton
      {...props}
      kind={kind}
      overrides={{
        BaseButton: {
          style: () => overrides[kind]
        }
      }}
    >
      {children}
    </DefaultButton>
  )
}

export default Button
