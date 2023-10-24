'use client'

// core
import React from 'react'
// components
// import { CardCorporate } from './variants/CardCorporate'
import { CardDefault, ICardDefaultProps } from './variants/CardDefault'
import { CardIATPricing } from './variants/CardIATPricing'
import { CardOffer } from './variants/CardOffer'

export class Card extends React.Component<ICardDefaultProps> {
  //   static Course = CardCourse
  static IATPricing = CardIATPricing
  // static Corporate = CardCorporate
  static Offer = CardOffer

  render() {
    return <CardDefault {...this.props} />
  }
}
