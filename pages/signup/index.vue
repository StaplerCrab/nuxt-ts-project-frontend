<template>
    <div class="user">
        <p>
            <label>Username</label>
            <input id="un" type="text" v-model="localData.username">
        </p>
        <p>
            <label>Password</label>
            <input id="pw" type="text" v-model="localData.password">
        </p>
        <p>
            <label>E-mail</label>
            <input id="em" type="email" v-model="localData.email">
        </p>
        <p>
            <button @click="update">Submit</button>
        </p>
        <div>
            <label>Username: {{ getUsername }}</label>
            <label>Email: {{ getEmail }}</label>
        </div>
        <div>
            <nuxt-link to="/">BACK</nuxt-link>
        </div>

    </div>
</template>

<script lang="ts">
import { Vue, Component, namespace } from 'nuxt-property-decorator'
const user = namespace('user')


@Component
export default class User extends Vue {
    public localData: object = {}
    @user.State
    public info!: object
    @user.Getter
    public getUsername!: string
    @user.Getter
    public getEmail!: string
    @user.Mutation
    public updateUserInfo!: (data: object) => void
    
    mounted() {
        this.localData = { ...this.localData, ...this.info }
    }

    public update(): void {
        this.updateUserInfo(this.localData)
        this.clearFields()
    }

    private clearFields(): void {
        
    }

}
</script>