import {
  DndContext,
  closestCenter,
  type DragEndEvent,
} from '@dnd-kit/core';

import {
  SortableContext,
  horizontalListSortingStrategy,
  useSortable,
  arrayMove,
} from '@dnd-kit/sortable';

import { CSS } from '@dnd-kit/utilities';

interface SelectedPagesBarProps {
  selectedPages: number[];

  setSelectedPages:
    React.Dispatch<
      React.SetStateAction<
        number[]
      >
    >;
}

interface SortablePageItemProps {
  page: number;
}

const SortablePageItem = ({
  page,
}: SortablePageItemProps) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = useSortable({
    id: page,
  });

  const style = {
    transform:
      CSS.Transform.toString(
        transform,
      ),
    transition,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="cursor-grab rounded-lg bg-black px-4 py-2 text-white active:cursor-grabbing"
    >
      Page {page}
    </div>
  );
};

const SelectedPagesBar = ({
  selectedPages,
  setSelectedPages,
}: SelectedPagesBarProps) => {
  const handleDragEnd = (
    event: DragEndEvent,
  ) => {
    const {
      active,
      over,
    } = event;

    if (
      !over ||
      active.id === over.id
    ) {
      return;
    }

    setSelectedPages(
      (pages) => {
        const oldIndex =
          pages.indexOf(
            Number(
              active.id,
            ),
          );

        const newIndex =
          pages.indexOf(
            Number(
              over.id,
            ),
          );

        return arrayMove(
          pages,
          oldIndex,
          newIndex,
        );
      },
    );
  };

  return (
    <div className="mb-8 rounded-2xl bg-white p-5 shadow">
      <h2 className="mb-3 text-lg font-semibold">
        Selected Pages
      </h2>

      {selectedPages.length ===
      0 ? (
        <p className="text-gray-500">
          No pages selected
        </p>
      ) : (
        <DndContext
          collisionDetection={
            closestCenter
          }
          onDragEnd={
            handleDragEnd
          }
        >
          <SortableContext
            items={
              selectedPages
            }
            strategy={
              horizontalListSortingStrategy
            }
          >
            <div className="flex flex-wrap gap-3">
              {selectedPages.map(
                (page) => (
                  <SortablePageItem
                    key={page}
                    page={page}
                  />
                ),
              )}
            </div>
          </SortableContext>
        </DndContext>
      )}
    </div>
  );
};

export default SelectedPagesBar;