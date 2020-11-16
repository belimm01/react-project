const transformData = (project) => {
    return {
        id: (project.id) ? project.id : "",
        name: (project.status) ? project.name : "",
        status: (project.status) ? project.status : "",
        sourceLanguage: (project.sourceLanguage) ? project.sourceLanguage : "",
        dateDue: (project.dateDue) ? new Date(project.dateDue).toISOString() : "",
        targetLanguages:
            (typeof project.targetLanguages !== 'undefined' &&
                project.targetLanguages instanceof Array &&
                project.targetLanguages?.length)
                ? project.targetLanguages.join(',') : ""
    }
}

export {transformData}