
import React, { memo,useEffect,useState,useRef } from 'react'
import { DemoWrapper } from './style'

const index = memo(() => {
  const arr = ['aaa','bbaab','ccssc','ddgd','eese','fssssff']
  const [currentIndex, setCuurrentIndex ] = useState(0)

  const change = ( falg = true) => {
    let index = falg? currentIndex + 1 : currentIndex - 1

    if (index < 0 ) index = 0;
    if (index === arr.length) index = arr.length - 1
   
    console.log(index);
    const conEl =  conRef.current
    const currenEl = conEl.children[index]
    const width = conEl.offsetWidth
    const scrollWidth = conEl.scrollWidth


    const result = currenEl.offsetWidth * 0.5 + currenEl.offsetLeft - width * 0.5
    console.log(result);
    // console.log(width * 0.5 - currentWidth * 0.5);
    conEl.style.transform = `translateX(${-result}px)`
    setCuurrentIndex(index)
  }

  useEffect(() => {
    console.log(currentIndex);
  })

  const conRef = useRef()


  return (
    <DemoWrapper>
      <button onClick={() => change(false)}>上一个</button>
      <button onClick={() => change(true)}>下一个</button>

      <div className="con" ref={conRef}>
        {
          arr.map(item => (
            <span className="item" key={item}>{item}</span>
          ))
        }
      </div>
    </DemoWrapper>
  )
})

export default index