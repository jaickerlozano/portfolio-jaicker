import asyncio
from playwright.async_api import async_playwright

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch(args=['--no-sandbox', '--disable-setuid-sandbox'])
        page = await browser.new_page(viewport={'width': 1280, 'height': 800})
        await page.goto('http://localhost:5173')
        # Wait for the page to load
        await page.wait_for_timeout(2000)

        await page.screenshot(path='portfolio_full.png', full_page=True)

        # Scroll to Projects
        await page.evaluate("window.scrollTo(0, document.body.scrollHeight / 3)")
        await page.wait_for_timeout(1000)
        await page.screenshot(path='portfolio_projects.png')

        # Scroll to Contact
        await page.evaluate("window.scrollTo(0, document.body.scrollHeight)")
        await page.wait_for_timeout(1000)
        await page.screenshot(path='portfolio_contact.png')

        await browser.close()

if __name__ == '__main__':
    asyncio.run(main())