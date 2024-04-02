<template>
  <div class="flex items-center rounded-md border border-[#33333d] bg-[#23232b] pr-5">
    <input
      v-model="password"
      placeholder="Generated Password"
      type="text"
      class="w-full rounded bg-[#23232b] p-4 text-2xl text-white outline-0 lg:p-2 lg:py-3 lg:text-base"
    />
    <Copy class="cursor-pointer text-[#a4ffaf]" @click="copyPassword" />
  </div>
</template>

<script lang="ts">
import Copy from './icons/Copy.vue'
import { toast } from '../utils/toats'
export default {
  components: { Copy },
  props: {
    generatedPassword: {
      type: String,
      required: false
    }
  },
  data: () => ({
    password: '' as string
  }),
  methods: {
    copyPassword() {
      if (this.password.length === 0) return
      navigator.clipboard.writeText(this.password)
      toast.success('Password copied to clipboard')
    }
  },
  watch: {
    password: {
      handler: function (password: string) {
        if (password.length === 0) return
      },
      immediate: true
    },
    generatedPassword: {
      handler: function (password: string) {
        this.password = password
      },
      immediate: true
    }
  }
}
</script>
