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
    <p className="text-[0.9375rem] leading-relaxed sm:text-base">
      {skills.map((skill, index) => {
        const isFeatured = featured.includes(skill);
        const isMuted = muted.includes(skill);
        return (
          <span key={skill}>
            {index > 0 && (
              <span className="text-muted/50" aria-hidden="true">
                {" · "}
              </span>
            )}
            <span
              className={
                isFeatured
                  ? "font-semibold text-accent"
                  : isMuted
                    ? "text-muted"
                    : "font-medium text-navy"
              }
            >
              {skill}
            </span>
          </span>
        );
      })}
    </p>
  );
}
