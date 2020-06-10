<template>
    <div>
        <h1>Main Page</h1>
        <div class="container">
            <ul>
                <li v-for="item in items" :key="item.id">{{ item.name }}</li>
            </ul>
        </div>
    </div>
</template>

<script lang="ts">
// import Vue from 'vue'
import ItemQuery from '~/apollo/queries/items.graphql'
import "vue-apollo"
import { Component, Vue } from 'nuxt-property-decorator'
import { ItemsQuery } from '../types/types'

@Component({
    apollo: {
        items: {
            query: ItemQuery
        }
    }
})

export default class IndexPage extends Vue { }


// interface Item {
//     id: number
//     name: string
// }

// interface Data {
//     allItems: Item []
// }

// export default Vue.extend({
//     data(): Data {
//         return {
//             allItems: []
//         }
//     },
//     computed: {
//       items(): Item[] {
//           return this.res
//       }
//     },
//     apollo: {
//         res: () => ItemQuery
//     }
// })
    

</script>