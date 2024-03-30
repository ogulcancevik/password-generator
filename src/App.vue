<template>
  <MainLayout>
    <div class="text-center text-xl tracking-wide text-[#7e7c8a]">Password Generator</div>
    <Input :generatedPassword="generatedPassword" />
    <Settings @generatePassword="generatePassword" :isGenerating="isGenerating" />
  </MainLayout>
</template>

<script lang="ts">
import MainLayout from './layouts/MainLayout.vue'
import Input from './components/Input.vue'
import Settings from './components/Settings.vue'
import { PasswordSettings } from './types/PasswordSettings'
import { generate } from './services/generate'
import { toast } from './utils/toats'

export default {
  components: { MainLayout, Input, Settings },
  data: () => ({
    generatedPassword: '' as string,
    isGenerating: false as boolean
  }),
  methods: {
    async generatePassword(payload: PasswordSettings) {
      this.isGenerating = true
      const { passwordLength, excludeNumbers, excludeSpecialChars } = payload
      try {
        const data = await generate({
          length: passwordLength,
          exclude_numbers: !excludeNumbers,
          exclude_special_chars: !excludeSpecialChars
        })
        this.generatedPassword = data.random_password
      } catch (error) {
        toast.error('An error occurred while generating password')
      }
      this.isGenerating = false
    }
  }
}
</script>
