import { Story } from '@storybook/react/types-6-0'
import React from 'react'
import { DIFFUSION, XDIFFUSION } from '../../constants/tokens'
import Component, { DoubleCurrencyLogoProps } from './index'

export default {
  title: 'DoubleCurrencyLogo',
  decorators: [],
}

const Template: Story<DoubleCurrencyLogoProps> = (args) => <Component {...args} />

export const DoubleCurrencyLogo = Template.bind({})
DoubleCurrencyLogo.args = {
  currency0: DIFFUSION[6942069],
  currency1: XDIFFUSION[6942069],
  size: 220,
}
