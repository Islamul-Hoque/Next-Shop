"use client";
import { useEffect, useContext } from "react";
import { useRouter } from "next/navigation";

import Loading from "../Loading";
import { AuthContext } from "../../../Context/AuthProvider";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const router = useRouter();

    useEffect(() => {
        if (!loading && !user) {
            router.push("/login");
        }
    }, [loading, user, router]);

    if (loading || !user) return <Loading />;
    return children;
};

export default PrivateRoute;