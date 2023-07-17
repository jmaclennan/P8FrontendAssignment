import { radioAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/react'

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(radioAnatomy.keys)

const baseStyle = definePartsStyle({
  control: {
    borderColor: 'gray.400',
  },
  label: {
    fontWeight: 'semibold'
  }
})

const sizes = {
  xl: definePartsStyle({
    control: {
      w: 7,
      h: 7,
      borderRadius: '50%'
    }
  })
}

export const Radio = defineMultiStyleConfig({ baseStyle, sizes })