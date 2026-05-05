import Image from 'next/image';
import { Mail, Linkedin } from 'lucide-react';
import type { Author } from '@/lib/authors';

interface AuthorBylineProps {
  author: Author;
  publishedAt: string;
  updatedAt: string;
  readingTime: number;
}

function formatDate(iso: string): string {
  try {
    return new Date(iso).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  } catch {
    return iso;
  }
}

export default function AuthorByline({
  author,
  publishedAt,
  updatedAt,
  readingTime,
}: AuthorBylineProps) {
  const published = formatDate(publishedAt);
  const updated = formatDate(updatedAt);
  const wasUpdated = updated && updated !== published;

  return (
    <div className="flex items-center gap-4 py-6 border-y border-white/10 my-8">
      <a
        href={author.profile_url}
        className="block w-12 h-12 rounded-full overflow-hidden bg-zinc-800 flex-shrink-0 ring-1 ring-white/10 hover:ring-[#FF7404] transition-all"
        aria-label={`${author.name} - ${author.short_title}`}
      >
        <Image
          src={author.photo}
          alt={`${author.name} headshot`}
          width={48}
          height={48}
          className="object-cover w-full h-full"
        />
      </a>

      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-white/60 text-sm">By</span>
          <a
            href={author.profile_url}
            className="text-white font-semibold hover:text-[#FF7404] transition-colors"
          >
            {author.name}
          </a>
          <span className="text-white/30 text-sm" aria-hidden="true">
            /
          </span>
          <span className="text-white/60 text-sm">
            {author.short_title}
          </span>
          {author.linkedin && (
            <a
              href={author.linkedin}
              target="_blank"
              rel="noopener noreferrer me author"
              title={`${author.name} on LinkedIn`}
              className="w-6 h-6 rounded-full bg-white/5 hover:bg-[#FF7404] hover:text-black flex items-center justify-center text-white/50 transition-all"
            >
              <Linkedin className="w-3 h-3" />
            </a>
          )}
        </div>
        <p className="text-white/50 text-xs mt-1 leading-snug">
          {author.credential_line}
        </p>
        <div className="mt-2 flex items-center gap-2 text-xs text-white/40">
          <span>Published {published}</span>
          {wasUpdated && (
            <>
              <span className="text-white/20" aria-hidden="true">&middot;</span>
              <span>Updated {updated}</span>
            </>
          )}
          <span className="text-white/20" aria-hidden="true">&middot;</span>
          <span>{readingTime} min read</span>
          {author.email && (
            <>
              <span className="text-white/20" aria-hidden="true">&middot;</span>
              <a
                href={`mailto:${author.email}`}
                title={`Email ${author.name}`}
                aria-label={`Email ${author.name}`}
                className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white/45 transition-all hover:border-[#FF7404]/60 hover:bg-[#FF7404]/10 hover:text-[#FF7404]"
              >
                <Mail className="h-3.5 w-3.5" />
              </a>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
