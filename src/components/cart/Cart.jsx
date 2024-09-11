"use client"

import Image from "next/image";
import Cart1 from "../../../public/assets/cart1.png"
import Cart2 from "../../../public/assets/cart2.png"
import { useState } from "react";
import Button from "../shared/Button";
const Cart = () => {


    const Cartproducts = [
        {
            id: 1,
            name: "LCD Monitor",
            image: Cart1,
            price: "650$",
            quantity: "1",
            total: "650$"
        },
        {
            id: 2,
            name: "H1 Gamepad",
            image: Cart2,
            price: "550$",
            quantity: "2",
            total: "1000$"
        },
    ]

    return (
        <div>
            <div className="my-10">
                Home / Cart
            </div>

            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr className="text-left">
                            <th>Product</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Subtotal</th>
                        </tr>
                    </thead>
                    {
                        Cartproducts.map(product =>
                            <tbody key={product?.id}>
                                <tr className="text center">
                                    <td>
                                        <div className="flex items-center gap-3 py-6">
                                            <div className="avatar">
                                                <div className="mask mask-squircle h-12 w-12">
                                                    <Image
                                                        src={product.image}
                                                        alt="Product Image"
                                                        width={48}
                                                        height={48}
                                                    />
                                                </div>
                                            </div>
                                            <div>
                                                <div>{product?.name}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {product?.price}
                                    </td>
                                    <td>
                                        <input
                                            type="number"
                                            name="quantity"
                                            min={1}
                                            value={`${product?.quantity}`}
                                            className="border p-2 rounded w-16 text-center"
                                        />
                                    </td>
                                    <td>
                                        {product?.total}
                                    </td>
                                </tr>
                            </tbody>
                        )
                    }
                </table>
            </div>

            <div className="flex justify-between">
                <div>
                    <button className="btn border-2 border-gray-200 px-4 py-2">Return To Shop</button>
                </div>
                <div>
                    <button className="btn border-2 border-gray-200 px-4 py-2">Update Cart</button>
                </div>
            </div>

            <div className="mt-16 flex flex-col md:flex-row p-4 gap-3 md:justify-around">
                <div className="flex gap-3">
                    <div>
                        <input type="text" placeholder="Coupon Code" className="border px-4 py-2 border-gray-300" />
                    </div>
                    <Button text={"Apply Coupon"}></Button>
                </div>
                <div className="border border-gray-300 rounded-lg p-6 max-w-sm md:w-[470px]">
                    <h2 className="font-bold text-lg mb-6">Cart Total</h2>

                    <div className="flex justify-between mb-4">
                        <span>Subtotal:</span>
                        <span>$1750</span>
                    </div>
                    <hr className="border-t border-gray-300 mb-4" />

                    <div className="flex justify-between mb-4">
                        <span>Shipping:</span>
                        <span>Free</span>
                    </div>
                    <hr className="border-t border-gray-300 mb-4" />

                    <div className="flex justify-between mb-6">
                        <span className="font-semibold">Total:</span>
                        <span className="font-semibold">$1750</span>
                    </div>

                    <div className="flex justify-center">
                        <Button text={"Proceess to checkout"}></Button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Cart;
