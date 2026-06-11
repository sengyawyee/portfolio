"use client";

import { trackEvent } from "@/lib/analytics";

export type ProjectViewLocation =
  | "featured_projects"
  | "more_selected_work"
  | "earlier_frontend_experience"
  | "agentic_workflow_case_study";

type ProjectViewLinkProps = {
  url: string;
  title: string;
  category: string;
  location: ProjectViewLocation;
};

export default function ProjectViewLink({
  url,
  title,
  category,
  location,
}: ProjectViewLinkProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:text-bright-blue"
      onClick={() => {
        trackEvent("view_project", {
          project_name: title,
          project_category: category,
          location,
        });
      }}
    >
      {url.replace("https://", "")}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-4 w-4"
        aria-hidden="true"
      >
        <path
          fillRule="evenodd"
          d="M4.25 5.5a.75.75 0 0 1 .75-.75h8.5a.75.75 0 0 1 .75.75v8.5a.75.75 0 0 1-1.5 0V7.06l-5.22 5.22a.75.75 0 1 1-1.06-1.06l5.22-5.22H5a.75.75 0 0 1-.75-.75Z"
          clipRule="evenodd"
        />
      </svg>
    </a>
  );
}
