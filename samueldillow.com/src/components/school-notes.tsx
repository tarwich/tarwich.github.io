import { cn } from '@/lib/utils';
import { Star } from 'lucide-react';
import { ComponentProps, Fragment } from 'react';
import { parse } from '../lib/school';

export default function SchoolNotes({ data }: { data: string }) {
  const blocks = parse(data) as TSchoolDocument;

  console.log(blocks);

  return (
    <div className="not-prose p-4 flex flex-col gap-4">
      {blocks.value.map((block, index) => {
        if (block.type === 'header') {
          return <HeaderBlock key={index} block={block} />;
        } else if (block.type === 'section') {
          return <SectionBlock key={index} block={block} />;
        } else if (block.type === 'empty') {
          return null;
        }
      })}
    </div>
  );
}

const HeaderBlock = ({ block }: { block: THeaderBlock }) => {
  return (
    <h1 className="text-capitalize flex flex-row items-center justify-between">
      <ContentBlock contents={block.title} />
    </h1>
  );
};

const SectionBlock = ({ block }: { block: TSectionBlock }) => {
  return (
    <div className={cn('flex flex-col gap-2')}>
      <div
        className={cn(
          'flex flex-row items-center gap-2',
          block.important && 'bg-blue-100'
        )}
      >
        {block.important && <Star className="w-4 h-4" />}
        <ContentBlock contents={block.title} />
      </div>
      {block.value.map((value, index) => {
        if (value.type === 'list') {
          return <ListBlock key={index} items={value.items} />;
        } else if (value.type === 'table') {
          return <TableBlock key={index} block={value} />;
        }
      })}
    </div>
  );
};

const ContentBlock = ({
  contents,
  ...props
}: { contents: TContentNode } & ComponentProps<'span'>) => {
  return (
    <span
      {...props}
      className={cn('inline-flex flex-row items-center gap-2', props.className)}
    >
      {contents.value}
      {contents.annotations?.map((content) => {
        if (content.type === 'page') {
          return <PageNumber key={content.value}>{content.value}</PageNumber>;
        } else if (content.type === 'date') {
          return <Year key={content.value}>{content.value}</Year>;
        }
      })}
    </span>
  );
};

const PageNumber = (props: ComponentProps<'small'>) => {
  return (
    <small
      className="text-sm bg-blue-200 px-2 rounded-full empty:hidden"
      {...props}
    />
  );
};

const Year = (props: ComponentProps<'small'>) => {
  return (
    <small
      className="text-sm border border-gray-500 px-1 rounded-md empty:hidden"
      {...props}
    />
  );
};

const ListBlock = ({ items }: { items: TContentNode[] }) => {
  return (
    <ul className="flex flex-row flex-wrap gap-2">
      {items.map((item, index) => {
        return (
          <span
            key={index}
            className={cn(
              'empty:hidden before:content-["•"] before:text-gray-500 before:mr-2'
            )}
          >
            <ContentBlock contents={item} />
          </span>
        );
      })}
    </ul>
  );
};

const TableBlock = ({ block }: { block: TTableBlock }) => {
  if (!block.value?.length) {
    return null;
  }

  return (
    <Fragment>
      <dl className="grid grid-cols-[auto,1fr] gap-x-4 gap-y-0">
        {block.value.map((row, index) => {
          const isHeader = !row.value;

          return (
            <Fragment key={index}>
              <dt
                className={cn(
                  'bg-gray-100 px-3 py-1 m-0',
                  isHeader && 'col-span-2'
                )}
              >
                <ContentBlock contents={row.header.value} />
              </dt>
              {row.value && (
                <dd className={cn('px-3 py-1 m-0')}>
                  {row.value.value.type === 'list' ? (
                    <ListBlock items={row.value.value.items} />
                  ) : (
                    <ContentBlock contents={row.value.value} />
                  )}
                </dd>
              )}
            </Fragment>
          );
        })}
      </dl>
    </Fragment>
  );
};

export type TTextNode = {
  type: 'text';
  value: string;
};

export type TYearNode = {
  type: 'date';
  value: string;
};

export type TPageNode = {
  type: 'page';
  value: string;
};

export type TContentNode = {
  type: 'text';
  value: string;
  annotations: (TPageNode | TYearNode)[];
};

export type TListNode = {
  type: 'list';
  items: TContentNode[];
};

export type TListBlock = {
  type: 'list';
  items: TContentNode[];
};

export type THeaderCell = {
  type: 'header-cell';
  important: string | null;
  value: TContentNode;
};

export type TDataCell = {
  type: 'data-cell';
  important: string | null;
  value: TContentNode | TListNode;
};

export type TTableRow = {
  type: 'row';
  header: THeaderCell;
  value?: TDataCell;
};

export type TTableBlock = {
  type: 'table';
  value: TTableRow[];
};

export type TEmptyBlock = {
  type: 'empty';
};

export type THeaderBlock = {
  type: 'header';
  title: TContentNode;
};

export type TSectionBlock = {
  type: 'section';
  important: string | null;
  title: TContentNode;
  value: (TListBlock | TTableBlock)[];
};

export type TDocumentBlock = TEmptyBlock | THeaderBlock | TSectionBlock;

export type TSchoolDocument = {
  type: 'document';
  value: TDocumentBlock[];
};
