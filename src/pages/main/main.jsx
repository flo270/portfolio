import React from 'react'
import Section from '../../component/Section/Section';
import Card from '../../component/Card/Card'
import styles from './main.module.css'
import Contact from '../../component/Contact/Contact';
export default function main() {
  return (
    <div className={`continer-fluid ${styles.bgImg}`}>
       <Card/>
       <Section/>
       <Contact/>
    </div>
  )
}
