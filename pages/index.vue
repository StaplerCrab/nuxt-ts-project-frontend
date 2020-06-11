<template>
    <div>
        <nuxt-link to="/signup">TO SIGNUP</nuxt-link>
        <h1>Main Page</h1>
        <div class="container">
            <ul>
                <li v-for="item in items" :key="item.id">{{ item.name }}</li>
            </ul>
        </div>
        <div class="container">
            <h1>Username: {{ getUsername }}</h1>
        </div>
    </div>
</template>

<script lang="ts">
// import Vue from 'vue'
import ItemQuery from '~/apollo/queries/items.graphql'
import "vue-apollo"
import { Component, Vue, namespace, Getter } from 'nuxt-property-decorator'
import { ItemsQuery } from '../types/types'

const user = namespace('user')

@Component({
    apollo: {
        items: {
            query: ItemQuery
        }
    }
})

export default class IndexPage extends Vue {

    @user.Getter
    public getUsername!: string    
 }

</script>