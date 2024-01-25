import type User from "../models/User";
import { ApiServiceBase } from "./ApiServiceBase";

export default class AuthService extends ApiServiceBase {
    async login(
        email: string,
        password: string,
        remember = true
    ): Promise<any> {
        return await this.call("/login", {
            method: "post",
            body: { email, password, remember },
        });
    }

    async logout(): Promise<any> {
        return await this.call("/logout", { method: "post" });
    }

    async register(
        name: string,
        email: string,
        phone:string,
        password: string,
        password_confirmation: string
    ): Promise<any> {
        return await this.call("/register", {
            method: "post",
            body: { name, email,phone, password, password_confirmation },
        });
    }

    async passwordForgot(email: string): Promise<any> {
        return await this.call("api/forgot-password", {
            method: "post",
            body: { email },
        });
    }

    async passwordReset(
        token: string,
        email: string,
        password: string,
        password_confirmation: string
    ): Promise<{ status: string }> {
        return await this.call("/reset-password", {
            method: "post",
            body: { email, token, password, password_confirmation },
        });
    }

    async emailSendVerification(): Promise<any> {
        return await this.call("/email/verification-notification", {
            method: "post",
        });
    }
    async profileDetails(): Promise<any> {
        return await this.call("/api/profile")
    }
    async user(): Promise<User> {
        return await this.call("/api/user");
    }
    async saveProfile(shipping:any,billing:any):Promise<any> {
        return await this.call("/api/updateprofile",{
            method:"post",
            body:{shipping,billing}
        });
    }
}
