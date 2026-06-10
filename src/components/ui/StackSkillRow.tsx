type StackSkillRowProps = {
  skills: string[];
  featured?: string[];
  muted?: string[];
};

export default function StackSkillRow({
  skills,
  featured = [],
  muted = [],
}: StackSkillRowProps) {
  return (
    <ul className="flex flex-wrap gap-2">
      {skills.map((skill) => {
        const isFeatured = featured.includes(skill);
        const isMuted = muted.includes(skill);

        return (
          <li key={skill}>
            <span
              className={`inline-flex items-center rounded-md border px-3 py-1.5 text-sm font-medium leading-none ${
                isFeatured
                  ? "border-indigo-300/70 bg-indigo-50 font-semibold text-indigo-700"
                  : isMuted
                    ? "border-slate-200 bg-slate-50 text-muted"
                    : "border-slate-200 bg-white text-navy"
              }`}
            >
              {skill}
            </span>
          </li>
        );
      })}
    </ul>
  );
}
