<script setup lang="ts">
import { onMounted, ref } from "vue";
import Default from "@/layouts/default.vue";
import { getReviews } from "@/api/reviews";

interface ReviewItem {
  id: string;
  name: string;
  avatar: string;
  createdAt: string;
  review: number;
}

interface ReviewSummary {
  rating: number;
  reviewsCount: number;
}

const loading = ref<boolean>(false);
const data = ref<ReviewSummary | null>(null);
const isShowModal = ref(false);

async function loadReviews(): Promise<void> {
  try {
    loading.value = true;
    const response = await getReviews();

    data.value = calculateReviewSummary(response.data);

    console.log(response);
  } catch (error) {
    console.error(error);
  } finally {
    loading.value = false;
  }
}

function calculateReviewSummary(data: ReviewItem[]): ReviewSummary {
  const reviewsCount = data.length;
  if (reviewsCount === 0) {
    return { rating: 0, reviewsCount: 0 };
  }

  const total = data.reduce((sum, item) => sum + item.review, 0);
  const rating = total / reviewsCount;

  return {
    rating: parseFloat(rating.toFixed(1)),
    reviewsCount,
  };
}

onMounted(() => {
  loadReviews();
});
</script>

<template>
  <Default>
    <GoogleRating
      :loading="loading"
      :rating="data?.rating ?? 0"
      :reviewsCount="data?.reviewsCount ?? 0"
      @click-primary="isShowModal = true"
    />
    <UModal
      v-model:open="isShowModal"
      title="Написання відгуку"
      description="Тут можна написати відгук"
    >
      <template #body>...</template>
    </UModal>
  </Default>
</template>
