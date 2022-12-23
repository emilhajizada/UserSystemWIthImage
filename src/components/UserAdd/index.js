import React, { useRef } from 'react'

function UserAdd(props) {
    // burada elementi secmek ucun bir now js deki documenti get element by id etmek  ucun ref ile bir 
    // yer yaratdiq ve ora  elementimize ref = {Yaratdigimiz ref} deyerek secdik ve bunun .current i ile 
    // elementin deyerini secdik  ama bu input daki kimin ozunu qaytarir biz  deyeri almaq ucun buna .value deyirik
    const nameInput = useRef();
    const descriptionInput = useRef();
    const srcInput = useRef();
    function handleClick(e) {
        // sorgu getmesin deye from elementine gore e prevent default verdik
        e.preventDefault()
        const obj = {
            name:nameInput.current.value,
            decripton:descriptionInput.current.value,
            src:srcInput.current.value
        }
        // state deki arraye esla push etmek olmaz!!!!!!!!!!
        // buna gore  yeni array yaradiriq desturction ile   ... yazaraq  ardindan  , vergul qoyub yeni elae etdiyimiz
        // obyekti yaziriq 
        props.data.setUsers([...props.data.users,obj])
    }
  return (
    <div className='my-5  ms-5'>
        <form>
            <input ref={nameInput} placeholder='enter name' />
            <input ref={descriptionInput} placeholder='enter decription' />
            <input ref={srcInput} placeholder='enter Sekil' />
            {/* biz e deyerini oturmek ucun anonim functiondan  istifade edirik cunki funksiyani func() 
            ile yazsaq isletmeye calisacaq anonim de e ni alib otururuk oz funksiyamiza
            */}
            <button onClick={(e)=>{handleClick(e)}}>Add User</button>
        </form>
    </div>
  )
}

export default UserAdd