import { Module, VuexModule, Mutation } from 'vuex-module-decorators'

interface UserData {
    username: string
    password: string
    email: string
}

@Module({
    name: 'user',
    stateFactory: true,
    namespaced: true
})

export default class User extends VuexModule {
    public info: UserData = {
        username: '',
        password: '',
        email: ''
    }

    get getUsername(): string {
        return this.info.username
    }

    get getEmail(): string {
        return this.info.email
    }

    @Mutation
    public updateUserInfo(data: UserData) {
        this.info = { ...this.info, ...data }
    }
}