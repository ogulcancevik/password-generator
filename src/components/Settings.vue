<template>
  <div class="flex flex-col items-center gap-5 rounded-md border border-[#33333d] bg-[#23232b] p-5">
    <div class="flex w-full justify-between text-sm">
      <span>Character Length</span>
      <span class="text-[#a4ffaf]">{{ passwordLength }}</span>
    </div>
    <div class="flex w-full flex-col gap-5">
      <input
        id="default-range"
        type="range"
        value="50"
        class="h-2 w-full cursor-pointer appearance-none rounded-lg bg-[#141218] accent-[#a4ffaf]"
        v-model="passwordLength"
        max="50"
        min="16"
      />
      <div class="flex gap-5">
        <input
          type="checkbox"
          class="h-5 w-5 cursor-pointer appearance-none border border-gray-100 bg-transparent accent-[#a4ffaf] checked:appearance-auto"
          v-model="excludeNumbers"
        />
        <label for="uppercase" class="text-sm">Include Numbers</label>
      </div>
      <div class="flex gap-5">
        <input
          type="checkbox"
          class="h-5 w-5 cursor-pointer appearance-none border border-gray-100 bg-transparent accent-[#a4ffaf] checked:appearance-auto"
          v-model="excludeSpecialChars"
        />
        <label for="uppercase" class="text-sm">Include Symbols</label>
      </div>
    </div>
    <button
      class="mt-3 flex w-full items-center justify-center border-0 bg-[#a4ffaf] py-4 font-medium uppercase tracking-wider text-[#141218] transition-colors hover:bg-[#8ae3b1] focus:outline-none lg:text-sm"
      @click="generatePassword"
    >
      <Spinner v-if="isGenerating" />
      <span v-else>Generate Password</span>
    </button>
  </div>
</template>

<script lang="ts">
import { PasswordSettings } from '../types/PasswordSettings'
import Spinner from './Spinner.vue'
export default {
  components: { Spinner },
  props: {
    isGenerating: {
      type: Boolean,
      required: false
    }
  },
  data: () => ({
    passwordLength: 16 as number,
    excludeNumbers: false as boolean,
    excludeSpecialChars: false as boolean
  }),
  methods: {
    generatePassword() {
      const passwordSettings = {
        passwordLength: this.passwordLength,
        excludeNumbers: this.excludeNumbers,
        excludeSpecialChars: this.excludeSpecialChars
      } as PasswordSettings
      this.$emit('generatePassword', passwordSettings)
    }
  }
}
</script>
