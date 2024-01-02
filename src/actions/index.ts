"use server"
import {z} from "zod"

export const handleSignup = async(data: FormData) => {
    const firstname = data.get("firstname")?.valueOf()
}