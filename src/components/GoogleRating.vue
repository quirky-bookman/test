<script setup lang="ts">
import { computed } from "vue";

interface Props {
  rating: number;
  reviewsCount: number;
  loading?: boolean;
}

const props = defineProps<Props>();
const maxStars = 5;
const emit = defineEmits<{
  (e: "click-primary"): void;
}>();

const stars = computed(() => {
  const fullStars = Math.floor(props.rating);
  const hasHalf = props.rating % 1 >= 0.5;
  const emptyStars = maxStars - fullStars - (hasHalf ? 1 : 0);

  return [
    ...Array(fullStars).fill("full"),
    ...(hasHalf ? ["half"] : []),
    ...Array(emptyStars).fill("empty"),
  ];
});
</script>

<template>
  <div
    class="flex flex-col sm:flex-row sm:items-center p-[30px] bg-white shadow-[0px_4px_15px_0px_#0000000D]"
  >
    <div class="xl:flex xl:items-center">
      <div class="flex items-center gap-5 mb-2.5 xl:mb-0 xl:me-[60px]">
        <img src="@/assets/google.svg" class="size-10" alt="icon" />
        <p class="mb-0 text-[18px] xl:text-[20px] font-medium">
          Відгуки наших клієнтів у Google
        </p>
      </div>
      <img
        v-if="props.loading"
        src="@/assets/loader-circle.svg"
        class="animate-spin size-6 mx-auto"
        alt="spinner"
      />
      <div v-else class="sm:flex sm:items-center sm:flex-wrap leading-none">
        <div class="flex items-center mb-1.5 sm:mb-0">
          <p class="mb-0 font-medium text-2xl xl:text-4xl">
            {{ props.rating }}
          </p>
          <div class="flex items-center gap-1.5 mx-5">
            <template v-for="(star, i) in stars" :key="i">
              <img
                v-if="star === 'full'"
                src="@/assets/star-full.svg"
                class="size-[30px]"
                alt="star full"
              />
              <img
                v-else-if="star === 'half'"
                src="@/assets/star-half.svg"
                class="size-[30px]"
                alt="star half"
              />
              <img
                v-else
                src="@/assets/star-empty.svg"
                class="size-[30px]"
                alt="star empty"
              />
            </template>
          </div>
        </div>
        <p class="mb-0 text-sm text-[#798595]">
          {{ props.reviewsCount }} відгуки
        </p>
      </div>
    </div>

    <div class="flex flex-col pt-5 sm:pt-0 sm:flex-row gap-2.5 sm:ms-auto">
      <UButton
        size="xl"
        color="secondary"
        variant="solid"
        class="justify-center"
        href="https://google.com"
        target="_blank"
      >
        Переглянути
      </UButton>
      <UButton
        size="xl"
        color="primary"
        variant="solid"
        class="justify-center"
        @click="emit('click-primary')"
        >Написати</UButton
      >
    </div>
  </div>
</template>
