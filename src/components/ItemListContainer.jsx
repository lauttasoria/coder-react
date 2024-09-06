import React, { useEffect, useState } from 'react'
import { getProducts } from '../asyncmock'
import { ItemList } from './ItemList'
import { useParams } from 'react-router-dom'
import { getDocs, collection, query, where } from 'firebase/firestore'
import { db } from '../servicios/firebaseConfig'


const ItemListContainer = ({ greeting }) => {
  const [items, setItems] = useState([])
  const [cargando, setCargando] = useState(true)

  const { categoria } = useParams()


  useEffect(() => {
    setCargando(true)
    // if(categoria) {
    //   getProducts().then(prods => setItems(prods.filter(e => e.categoria === categoria)))
    //   .catch(err => err)
    //   .finally(() => setCargando(false))
    // }else{
    //   getProducts().then(prods => setItems(prods))
    //   .catch(err => err)
    //   .finally(() => setCargando(false))
    // }
    if (categoria) {
      const productosPorCat = query(collection(db, "productos"), where("categoria", "==", categoria))
      getDocs(productosPorCat).then(snapshot => {
        const prods = snapshot.docs.map(doc => {
          const data = doc.data()
          return { id: doc.id, ...data }
        })
        setItems(prods)
      }).finally(setCargando(false))
    } else {
      getDocs(collection(db, "productos")).then(snapshot => {
        const prods = snapshot.docs.map(doc => {
          const data = doc.data()
          return { id: doc.id, ...data }
        })
        setItems(prods)
      }).finally(setCargando(false))
    }
  }, [categoria])

  if (cargando) {
    return (
      
 
    <h2>Cargando...</h2>

    );
  }



  return (
    <div className='flex p-10 gap-2 justify-center'>
      
      <ItemList items={items} />
    </div>
  )
}

export default ItemListContainer