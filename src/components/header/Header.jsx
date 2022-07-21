import styles from './Header.module.css'

import Subtitle from '../Subtitle/Subtitle'
import Title from '../title/Title'
import Icon from '../icon/Icon'

function Header () {
  return (
    <div className={styles.header}>
      <Title> Jogo da velha - Tik Tak Toe </Title>
      <Subtitle> Criado por Bruno Patrício - @devbpatriciocosta</Subtitle>
      <div className={styles.iconContent}>
        <Icon iconName="github" link="https://github.com/devbpatriciocosta"/>
      </div>
    </div>
  )
}

export default Header