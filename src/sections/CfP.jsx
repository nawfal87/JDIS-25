export default function CfP(){
  return (
    <section id="cfp" className="section bg-card">
      <div className="container">
        <h2 className="text-2xl md:text-3xl font-bold">Appel à communication</h2>
        <p className="mt-4 text-slate-700">
          Les doctorants sont invités à soumettre un résumé étendu de 1 à 2 pages, au format PDF, présentant leurs travaux de recherche.<br/>
          La mise en forme doit respecter le modèle officiel (<a className="font-bold underline" href="/Abstract_template.doc" download>Template</a>) de la Journée Doctorale.<br/>
          Les résumés acceptés seront présentés soit sous forme de communications orales ou de présentations par posters, en fonction des décisions prises par le comité scientifique.
        </p>
        <div className="mt-6">
          <h3 className="text-xl md:text-2xl font-bold">Dates clés :</h3>
          <div className="mt-3 overflow-x-auto">
            <table className="w-full text-left border border-slate-200 rounded-2xl overflow-hidden">
              <tbody className="divide-y divide-slate-200">
                <tr className="bg-white">
                  <th className="p-3 w-1/2 font-semibold">Date limite de soumission des résumés</th>
                  <td className="p-3">19 novembre 2025</td>
                </tr>
                <tr className="bg-white">
                  <th className="p-3 w-1/2 font-semibold">Notification d'acceptation</th>
                  <td className="p-3">22 novembre 2025</td>
                </tr>
                <tr className="bg-white">
                  <th className="p-3 w-1/2 font-semibold">Version finale et inscription</th>
                  <td className="p-3">25 novembre 2025</td>
                </tr>
                <tr className="bg-white">
                  <th className="p-3 w-1/2 font-semibold">Date de la journée</th>
                  <td className="p-3">29 novembre 2025</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  )
}
