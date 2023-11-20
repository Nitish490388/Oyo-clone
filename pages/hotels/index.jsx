import React, { useState } from "react";
import Header1 from "@/components/Header1";
import Filters from "@/components/Filters";
import axios from "axios";
import Hotel from "@/components/Hotel";
import { useEffect } from "react";

const index = ({ hotels }) => {
    const [price, setPrice] = useState(3500);
    const [list, setList] = useState([]);
    const [checkedlist, setCheckedlist] = useState([]);

    const handlePrice = async () => {
        const { data } = await axios.get(`/api/facilities/range?price=${price}`);
        if (data?.hotels) {
            setList(data.hotels);
        }
    }

    const handleCheckList = async () => {
        const { data } = await axios.get(`/api/facilities/search?val=${checkedlist}`);
        if (data?.hotels) {
            setList(data.hotels);
        }
    }

    useEffect(() => {
        if (checkedlist) {
            handleCheckList();
        }
    }, [checkedlist])
    return (
        <>

            <Header1 />
            <div className="grid grid-cols-12">
                <div className="col-span-3 border border-red-500">
                    <Filters
                        price={price}
                        setPrice={setPrice}
                        handlePrice={handlePrice}
                        checkedList={checkedlist}
                        setCheckedList={setCheckedlist}
                    />
                </div>
                <div className="col-span-9">
                    {
                        list.length > 0 ? list.map((e) => {
                            return (
                                <div className=" m-5 " key={e._id}>
                                    <Hotel e={e} />
                                </div>
                            );
                        }) : hotels
                            ? hotels.map((e) => {
                                return (
                                    <div className=" m-5 " key={e._id}>
                                        <Hotel e={e} />
                                    </div>
                                );
                            })
                            : ""}
                </div>
            </div>
        </>
    );
};

export async function getServerSideProps(ctx) {
    // console.log(ctx.query.city);
    const res = await fetch(
        `${process.env.BASE_URL}/api/hotel?city=${ctx.query.city}`
    );
    const data = await res.json();
    // console.log(data.hotels.length);

    return {

        props: {
            hotels: data.hotels ? data.hotels : data.allhotels,
        },

    };
}

export default index;
