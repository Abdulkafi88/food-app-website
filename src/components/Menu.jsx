import React from "react"
import img1 from "../assets/greek-salad.jpg"
import img2 from "../assets/greek-salad.jpg"
import img3 from "../assets/greek-salad.jpg"
import "../styles/specials.css"
import { useState, useEffect } from "react"

const Menu = () => {
  const numberOfFOod = 12
  const numberofUserSearch = 12
  const [userFood, setUserFood] = useState([])
  const [getUserRequest, setgetuserRequest] = useState("")
  const [getUserResponse, setgetuserResponse] = useState([])
const fetchData = async (e) => {
  e.preventDefault()
  setgetuserRequest(e.target.value)
}
  useEffect(() => {
    const searchvalue = async () => {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${getUserRequest}`
      )
      const data = await res.json()
        if(data.meals){
          const result = (
            <div className="specials-menu">
              <div className="s-menus">
                {/* <img className="special-image" src={img1} alt={`img${i}`} /> */}
                <img
                  className="special-image"
                  src={data.meals[0].strMealThumb || img1}
                  alt={``}
                />
                <div className="special-name">
                  <h5>{data.meals[0].strMeal}</h5>
                  <h5 className="price">$12.99</h5>
                </div>
                <p className="special-paragraph">
                  {data.meals[0].strInstructions.substring(0, 100)}...
                </p>
                <button className="viewmore">Order a delivery</button>
              </div>
            </div>
          )
          setgetuserResponse([result])
        }
    }
    searchvalue()
  }, [getUserRequest])
  useEffect(() => {
    const userMenu = async () => {
      const hereUserFood = []

      for (let i = 0; i < numberOfFOod; i++) {
        const random = Math.floor(Math.random() * 10 + 1)
        const res = await fetch(
          `https://www.themealdb.com/api/json/v1/1/random.php?s=${random}`
        )
        const data = await res.json()

        if (data.meals) {
          const resut = (
            <div key={i} className="specials-menu">
              <div className="s-menus">
                {/* <img className="special-image" src={img1} alt={`img${i}`} /> */}
                <img
                  className="special-image"
                  src={data.meals[0].strMealThumb || img1}
                  alt={`img${i}`}
                />
                <div className="special-name">
                  <h5>{data.meals[0].strMeal}</h5>
                  <h5 className="price">$12.99</h5>
                </div>
                <p className="special-paragraph">
                  {data.meals[0].strInstructions.substring(0, 100)}...
                </p>
                <button className="viewmore">Order a delivery</button>
              </div>
            </div>
          )

          hereUserFood.push(resut)
        }
      }

      setUserFood(hereUserFood)
    }

    userMenu()
  }, [numberOfFOod])

  return (
    <>
      <div className="hey">
        <div className="group">
          <svg className="icon" aria-hidden="true" viewBox="0 0 24 24">
            <g>
              <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
            </g>
          </svg>
          <input
            placeholder="Search"
            type="search"
            className="input"
            onChange={fetchData}
          />
        </div>
      </div>

      <section className="specials-section">
        {userFood}
        {getUserResponse.length > 0 ? getUserResponse : userFood}
      </section>
    </>
  )
}

export default Menu
