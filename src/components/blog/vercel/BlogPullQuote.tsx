type Props = {
  children: React.ReactNode;
  attribution?: string;
};

export function BlogPullQuote({ children, attribution }: Props) {
  return (
    <blockquote className="my-10 border-l-2 border-neutral-900 pl-6">
      <p className="text-lg sm:text-xl leading-relaxed text-neutral-800 font-medium tracking-tight">
        {children}
      </p>
      {attribution && (
        <footer className="mt-4 text-sm text-neutral-500 not-italic">{attribution}</footer>
      )}
    </blockquote>
  );
}
