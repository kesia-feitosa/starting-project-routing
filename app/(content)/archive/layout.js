export default function ArchiveLayout({archive, latest}) {
  return (
  <div>
    <section id="archive-filter">{archive}</section>
    <section id="latest-filter">{latest}</section>
  </div>
  );
}