"use client"

import { setLoading } from "@/redux/features/loadingSlice";
import { useAppDispatch } from "@/redux/hooks";
import axios from "axios";
import { useEffect, useState } from "react";

export interface IProduct {
  _id: string;
  imgSrc: string;
  fileKey: string;
  name: string;
  price: string;
  category: string;
}
const Dashboard = () => {
  const [product, setProducts] = useState([]);
  const [openPopup, setOpenPopup] = useState(false);
  const [updateTable, setUpdateTable] = useState(false);
  const dispatch = useAppDispatch()
  useEffect(()=>{
    dispatch(setLoading(true))
    axios.get("api/get_products")
    .then((res)=> setProducts(res.data))
    .catch(error=>console.log(error))
    .finally(()=>dispatch(setLoading(false)))
  }
    ,[updateTable])
  return (
    <div>Dashboard</div>
  )

}

export default Dashboard;