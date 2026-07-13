import React, { useState } from "react";
import { cn } from "@/lib/utils";

interface ProjectImageProps {
	src?: string;
	alt: string;
	name: string;
	className?: string;
}

const getInitials = (name: string) =>
	name
		.split(/\s+/)
		.filter(Boolean)
		.slice(0, 2)
		.map((w) => w[0])
		.join("")
		.toUpperCase();

/**
 * Renders a project image, gracefully falling back to a branded gradient
 * placeholder (project initials + name) when the source is missing or fails
 * to load — so a broken-image icon never shows on the portfolio.
 */
const ProjectImage: React.FC<ProjectImageProps> = ({ src, alt, name, className }) => {
	const [failed, setFailed] = useState(false);
	const showFallback = !src || src.trim() === "" || failed;

	if (showFallback) {
		return (
			<div
				className={cn(
					"flex items-center justify-center bg-gradient-to-br from-charcoal via-charcoal to-[#1d1d1d]",
					className
				)}
				aria-label={alt}
				role="img"
			>
				<div className="px-4 text-center">
					<div className="font-mono text-3xl font-black tracking-tight text-lime">
						{getInitials(name)}
					</div>
					<div className="mt-1 line-clamp-1 font-mono text-xs font-medium uppercase tracking-widest text-white/40">
						{name}
					</div>
				</div>
			</div>
		);
	}

	return (
		<img
			src={src}
			alt={alt}
			className={className}
			onError={() => setFailed(true)}
		/>
	);
};

export default ProjectImage;
