import { Suspense } from "react";
import Login from "./Login";
import Loading from "../../Components/Loading"

export default function LoginPage() {
    return (
        <Suspense fallback={<Loading/>}>
            <Login />
        </Suspense>
)}