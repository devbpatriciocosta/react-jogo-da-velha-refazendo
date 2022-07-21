import styles from './Header.module.css'

import Subtitle from '../Subtitle/Subtitle'
import Title from '../title/Title'

function Header () {
  return (
    <div className={styles.header}>
    <Title> Jogo da velha - Tik Tak Toe </Title>
    <Subtitle> Criado por Bruno Patrício - @devbpatriciocosta</Subtitle>
    </div>
  )
}

export default Header