
class MarkdownFormatter {
    format(content) {
        return `**Markdown: ${content}`
    }
}

class HTMLFormatter {
    format(content) {
        return `<strong>HTML</strong> : ${content}`
    }
}

class contentFormatter {
    setStrategy(formatter) {
        this.formatter = formatter
    }

    format(content) {
        return this.formatter.format(content)
    }
}

module.exports = { MarkdownFormatter, HTMLFormatter, contentFormatter }