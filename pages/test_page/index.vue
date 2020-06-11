<template>
  <div class="user">
    <div class="title">Welcome {{ fullName }}</div>
    <div>
      First:
      <input type="text" v-model="localData.first" />
    </div>
    <button @click="update">Update Info</button>
  </div>
</template>
<script lang="ts">
import { Vue, Component, namespace } from 'nuxt-property-decorator'
const user1 = namespace('user1')
@Component
export default class User extends Vue {
  public localData: object = {}
  @user1.State
  public info!: object
  @user1.Getter
  public fullName!: string
  @user1.Mutation
  public updateUserInfo!: (data: object) => void
  mounted() {
    this.localData = { ...this.localData, ...this.info }
  }
  public update(): void {
    this.updateUserInfo(this.localData)
  }
}
</script>