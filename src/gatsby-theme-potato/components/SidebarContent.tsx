import {
  Avatar,
  NewsletterSignUp,
  SocialIcon,
  SocialIconsContainer,
  Widget
} from 'gatsby-theme-potato'
import React, { FC } from 'react'

const NewsletterWidget: FC = () => {
  return (
    <Widget>
      <NewsletterSignUp formUrl="https://example.com" antispamFieldName="" />
    </Widget>
  )
}

const ProfileWidget: FC = () => {
  return (
    <Widget>
      <Avatar src={require('../../../content/assets/download.png')} />
      <p>
        Nullam quis ante. Fusce pharetra convallis urna.
        Ut leo. In ut quam vitae odio lacinia tincidunt.
      </p>
      <p>
        Duis leo. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus, vitae iaculis lacus elit id tortor. In hac habitasse platea dictumst. 
        In hac habitasse platea dictumst. Praesent congue erat at massa. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. 
      </p>
      <SocialIconsContainer>
        <SocialIcon type="twitter" url="https://twitter.com/" />
      </SocialIconsContainer>
    </Widget>
  )
}

const SidebarContent: FC = () => (
  <>
    <ProfileWidget />
    {/* <NewsletterWidget /> */}
  </>
)

export default SidebarContent
