import { useMutation } from "@tanstack/vue-query";
import { COLLECTION_COMMENTS, DB_ID } from "~/app.constants";
import { v4 as uuid } from "uuid";
import { useDealSlideStore } from "~/store/deal-slide.store";


export function useCreateComment({ refetch }: { refetch: () => void }) {
    const store = useDealSlideStore();
    const commentRef = ref<string>();

    const { mutate } = useMutation({
        mutationKey: ["add comments", commentRef.value],
        mutationFn: () =>
            DB.createDocument(DB_ID, COLLECTION_COMMENTS, uuid(), {
                text: commentRef.value,
                deal: store.card?.id
            }),
        onSuccess: () => {
            refetch();
            commentRef.value = "";
        }
    })

    const writeComment = () => {
        if (!commentRef.value) return
        mutate();
    }
    return { writeComment, commentRef }
}

